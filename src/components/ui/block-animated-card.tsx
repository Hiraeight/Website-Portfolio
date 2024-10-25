"use client";

import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export function Skills({ items }) {
  return (
    <div className={cn(
      "flex flex-col gap-4 py-10"
    )}>
      {items.map((skill, index) => (
        <Card key={index}>
          <CardSkeletonContainer>
            <Skeleton logos={skill.logos} />
          </CardSkeletonContainer>
          <CardTitle>{skill.title}</CardTitle>
          <CardDescription>{skill.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-xl w-full mx-auto p-8 rounded-xl border border-[rgba(0,255,255,0.50)] dark:bg-[rgba(40,40,40,0.70)] bg-[rgba(50,50,50,0.70)] shadow-[2px_4px_16px_0px_rgba(0,255,255,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white dark:text-gray-800 py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-zinc-400 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[10rem] sm:h-[10rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-[rgba(50,50,50,.90)] dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Skeleton = ({ logos }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = logos.map((_, i) => [
    `.circle-${i + 1}`,
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-2">
        {logos.map((Logo, index) => (
          <Container key={index} className={`circle-${index + 1}`}>
            <Logo className="sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-[rgba(0,255,255)]" />
          </Container>
        ))}
      </div>
      <div className="h-40 w-px absolute top-5 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 md:h-16 md:w-16 sm:h-12 sm:w-12 rounded-full flex items-center justify-center bg-[rgba(0,255,255,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
