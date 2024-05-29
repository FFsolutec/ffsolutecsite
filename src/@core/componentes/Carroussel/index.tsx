import React, { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { MergeClassName } from "../utils/merge-classnames";
import { CircleChevronLeft } from "@/@core/@icons/CircleChevronLeft";
import { CircleChevronRight } from "@/@core/@icons/CircleChevronRight";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const CarouselRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>((props, ref) => {
  const {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className = "",
    children,
  } = props;
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsVisible, setItemsVisible] = useState(1);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    const updateItemsVisible = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const itemWidth = 200; // largura do item (definida por você)
        const visibleItems = Math.floor(containerWidth / itemWidth);
        setItemsVisible(visibleItems || 1);
      }
    };

    updateItemsVisible();
    window.addEventListener("resize", updateItemsVisible);

    return () => {
      window.removeEventListener("resize", updateItemsVisible);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        data-orientation={orientation}
        onKeyDownCapture={handleKeyDown}
        className={MergeClassName(["CarouselRoot", className])}
        role="region"
        aria-roledescription="carousel"
        style={
          { "--carousel-items-visible": itemsVisible } as React.CSSProperties
        }
        {...props}
      >
        <div ref={containerRef}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
});
CarouselRoot.displayName = "CarouselRoot";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className = "" } = props;
  const { orientation, carouselRef } = useCarousel();

  return (
    <div
      data-orientation={orientation}
      ref={carouselRef}
      style={{ overflow: "hidden" }}
    >
      <div
        ref={ref}
        className={MergeClassName(["CarouselContent", className])}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className = "" } = props;

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={MergeClassName(["CarouselItem", className])}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>((props, ref) => {
  const { className = "" } = props;
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      data-orientation={orientation}
      ref={ref}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={MergeClassName(["CarouselPrevious", className])}
      {...props}
    >
      <CircleChevronLeft />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>((props, ref) => {
  const { className = "" } = props;
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      data-orientation={orientation}
      ref={ref}
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={MergeClassName(["CarouselNext", className])}
      {...props}
    >
      <CircleChevronRight />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

const Carousel = {
  Root: CarouselRoot,
  Content: CarouselContent,
  Item: CarouselItem,
  Previous: CarouselPrevious,
  Next: CarouselNext,
};

export type { CarouselApi };
export {
  CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
};
