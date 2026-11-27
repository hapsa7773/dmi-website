
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Always start website from the top
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const duration = 2400;

    let animationFrame = 0;
    let exitTimer: ReturnType<typeof setTimeout>;
    let finishTimer: ReturnType<typeof setTimeout>;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        exitTimer = setTimeout(() => {
          setIsExiting(true);

          finishTimer = setTimeout(() => {
            // Reset scroll before removing loader
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant",
            });

            setIsFinished(true);
          }, 1000);
        }, 350);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      className={`dmi-loader ${
        isExiting ? "dmi-loader--exit" : ""
      }`}
    >
      {/* Background Panels */}
      <div className="dmi-panel dmi-panel--left" />
      <div className="dmi-panel dmi-panel--right" />

      {/* Top Information */}
      <div className="dmi-corner dmi-corner--top-left">
        DAIRY MACHINES INDIA
      </div>

      <div className="dmi-corner dmi-corner--top-right">
        ENGINEERING EXCELLENCE
      </div>

      {/* Center Logo */}
      <div className="dmi-center">
        <div className="dmi-logo">
          <img
            className="dmi-logo-base"
            src="/logos/logo-white.png"
            alt="Dairy Machines India"
          />

          <img
            className="dmi-logo-fill"
            src="/logos/logo-white.png"
            alt=""
            style={{
              clipPath: `inset(0 ${100 - progress}% 0 0)`,
            }}
          />

          <span
            className="dmi-edge"
            style={{
              left: `${progress}%`,
            }}
          />
        </div>

        <div className="dmi-subtitle">
          DAIRY PROCESSING SOLUTIONS
        </div>
      </div>

      {/* Bottom Progress Section */}
      <div className="dmi-bottom">
        <div className="dmi-progress-info">
          <span>INITIALIZING EXPERIENCE</span>

          <span className="dmi-number">
            {Math.floor(progress)
              .toString()
              .padStart(3, "0")}
            <small>%</small>
          </span>
        </div>

        <div className="dmi-progress-track">
          <div
            className="dmi-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="dmi-bottom-labels">
          <span>PRECISION ENGINEERING</span>
          <span>EST. INDIA</span>
        </div>
      </div>

      {/* Loader Styling */}
      <style jsx global>{`
        .dmi-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          background: #1f211e;
          color: #f5f3ee;
          font-family: Arial, sans-serif;
        }

        .dmi-panel {
          position: absolute;
          top: 0;
          width: 50.1%;
          height: 100%;
          background: #1f211e;
          z-index: 1;
          transition: transform 0.95s
            cubic-bezier(0.76, 0, 0.24, 1);
        }

        .dmi-panel--left {
          left: 0;
        }

        .dmi-panel--right {
          right: 0;
        }

        .dmi-loader--exit .dmi-panel--left {
          transform: translateX(-100%);
        }

        .dmi-loader--exit .dmi-panel--right {
          transform: translateX(100%);
        }

        .dmi-center {
          position: absolute;
          top: 46%;
          left: 50%;
          z-index: 2;
          width: 100%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dmi-logo {
          position: relative;
          width: min(62vw, 560px);
          aspect-ratio: 1200 / 447;
        }

        .dmi-logo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .dmi-logo-base {
          opacity: 0.16;
        }

        .dmi-logo-fill {
          opacity: 1;
        }

        .dmi-edge {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background: #c49a6c;
          box-shadow: 0 0 12px
            rgba(196, 154, 108, 0.7);
          pointer-events: none;
        }

        .dmi-subtitle {
          margin-top: 24px;
          color: #c49a6c;
          font-size: 9px;
          letter-spacing: 5px;
          text-align: center;
        }

        .dmi-corner {
          position: absolute;
          z-index: 2;
          top: 35px;
          color: rgba(245, 243, 238, 0.55);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .dmi-corner--top-left {
          left: 40px;
        }

        .dmi-corner--top-right {
          right: 40px;
        }

        .dmi-bottom {
          position: absolute;
          z-index: 2;
          left: 40px;
          right: 40px;
          bottom: 35px;
        }

        .dmi-progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          color: rgba(245, 243, 238, 0.6);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .dmi-number {
          color: #c49a6c;
          font-size: 15px;
          letter-spacing: 1px;
          font-variant-numeric: tabular-nums;
        }

        .dmi-number small {
          margin-left: 2px;
          font-size: 9px;
        }

        .dmi-progress-track {
          width: 100%;
          height: 1px;
          background: rgba(245, 243, 238, 0.15);
          overflow: hidden;
        }

        .dmi-progress-fill {
          height: 100%;
          background: #c49a6c;
          transition: width 0.05s linear;
        }

        .dmi-bottom-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          color: rgba(245, 243, 238, 0.35);
          font-size: 8px;
          letter-spacing: 2px;
        }

        @media (max-width: 640px) {
          .dmi-corner {
            top: 22px;
            font-size: 7px;
            letter-spacing: 1px;
          }

          .dmi-corner--top-left {
            left: 18px;
          }

          .dmi-corner--top-right {
            right: 18px;
          }

          .dmi-logo {
            width: 82vw;
          }

          .dmi-subtitle {
            margin-top: 18px;
            font-size: 7px;
            letter-spacing: 3px;
          }

          .dmi-bottom {
            left: 20px;
            right: 20px;
            bottom: 25px;
          }

          .dmi-progress-info {
            font-size: 7px;
            letter-spacing: 1px;
          }

          .dmi-bottom-labels {
            font-size: 6px;
            letter-spacing: 1px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dmi-panel {
            transition-duration: 0.01ms;
          }
        }
      `}</style>
    </div>
  );
}
