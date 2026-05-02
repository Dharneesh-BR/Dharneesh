import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaGlobe,
  FaBullseye,
  FaBriefcase,
  FaEye,
} from 'react-icons/fa';

const DEFAULT_MILESTONES = [
  { id: 1, title: 'Eterno', description: 'Milestone details will be added here.', color: '#ef4444', Icon: FaRocket },
  { id: 2, title: 'Mind Magna', description: 'Milestone details will be added here.', color: '#f59e0b', Icon: FaLightbulb },
  { id: 3, title: 'Eazy', description: 'Milestone details will be added here.', color: '#84cc16', Icon: FaCogs },
  { id: 4, title: 'Recibo', description: 'Milestone details will be added here.', color: '#8b5cf6', Icon: FaChartLine },
  { id: 5, title: 'Samsung', description: 'Milestone details will be added here.', color: '#06b6d4', Icon: FaGlobe },
  { id: 6, title: 'Philips', description: 'Milestone details will be added here.', color: '#f97316', Icon: FaBullseye },
  { id: 7, title: 'Hindustan Unilever', description: 'Milestone details will be added here.', color: '#ec4899', Icon: FaBriefcase },
  { id: 8, title: 'GSK', description: 'Milestone details will be added here.', color: '#3b82f6', Icon: FaEye },
];

const ROAD_PATH_D =
  'M 36 170 C 120 76, 236 76, 320 170 S 520 264, 604 170 S 804 76, 888 170 S 1088 264, 1172 170 S 1372 76, 1456 170';
const VIEWBOX_WIDTH = 1500;
const VIEWBOX_HEIGHT = 340;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const RoadmapJourneyTimeline = ({
  title = 'Roadmap Journey',
  milestones = DEFAULT_MILESTONES,
  className = '',
}) => {
  const timelineRef = useRef(null);
  const roadPathRef = useRef(null);
  const [milestonePoints, setMilestonePoints] = useState([]);
  const [pathLength, setPathLength] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });
  const progress = useMotionValue(0);
  const animatedPathLength = useTransform(progress, [0, 1], [0, pathLength]);

  const safeMilestones = useMemo(() => milestones.slice(0, 8), [milestones]);

  const calculateLayout = useCallback(() => {
    if (!roadPathRef.current || safeMilestones.length === 0) return;
    const totalLength = roadPathRef.current.getTotalLength();
    const points = safeMilestones.map((_, index) => {
      const t = safeMilestones.length === 1 ? 0.5 : index / (safeMilestones.length - 1);
      const point = roadPathRef.current.getPointAtLength(totalLength * t);
      return {
        x: clamp(point.x, 32, VIEWBOX_WIDTH - 32),
        y: point.y,
        isTop: index % 2 === 0,
      };
    });
    setPathLength(totalLength);
    setMilestonePoints(points);
  }, [safeMilestones]);

  useEffect(() => {
    calculateLayout();
    let rafId = 0;
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateLayout);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [calculateLayout]);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(progress, 1, {
      duration: 2.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, progress]);

  return (
    <motion.section
      ref={ref}
      className={`mt-20 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/95 via-slate-50/90 to-indigo-100/75 p-6 shadow-[0_20px_80px_-30px_rgba(30,64,175,0.45)] backdrop-blur-xl md:p-10">
        <h3 className="mb-10 text-center text-3xl font-bold text-[#000047] md:text-4xl">{title}</h3>

        <div ref={timelineRef} className="relative overflow-x-auto pb-2">
          <div className="relative h-[380px] min-w-[920px] lg:min-w-[1080px]">
            <svg
              className="absolute inset-x-0 top-1/2 h-[190px] w-full -translate-y-1/2"
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d={ROAD_PATH_D}
                stroke="#0f172a"
                strokeWidth="54"
                fill="none"
                strokeLinecap="round"
              />
              <path
                ref={roadPathRef}
                d={ROAD_PATH_D}
                stroke="#4b5563"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={ROAD_PATH_D}
                stroke="#d1d5db"
                strokeWidth="3.5"
                strokeDasharray="16 14"
                fill="none"
                strokeLinecap="round"
              />

              {/* Progress line animated along exact path */}
              <motion.path
                d={ROAD_PATH_D}
                stroke="url(#road-progress-gradient)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={animatedPathLength}
                strokeDashoffset={0}
              />
              <defs>
                <linearGradient id="road-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {safeMilestones.map((milestone, index) => {
              const point = milestonePoints[index];
              if (!point) return null;
              const Icon = milestone.Icon || FaRocket;

              return (
                <motion.article
                  key={milestone.id ?? index}
                  className="absolute w-[165px] -translate-x-1/2"
                  style={{
                    left: `${(point.x / VIEWBOX_WIDTH) * 100}%`,
                    top: point.isTop ? `${point.y - 154}px` : `${point.y + 34}px`,
                  }}
                  initial={{ opacity: 0, y: point.isTop ? 10 : -10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex flex-col items-center text-center">
                    {point.isTop && (
                      <>
                        <p className="mb-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                          {milestone.title}
                        </p>
                        <p className="mb-3 line-clamp-2 px-2 text-[10px] leading-tight text-slate-500">
                          {milestone.description}
                        </p>
                        <span className="mb-2 h-6 w-px bg-slate-300" />
                      </>
                    )}

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-white shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${milestone.color || '#3b82f6'} 0%, rgba(15,23,42,0.9) 160%)`,
                      }}
                    >
                      <Icon className="text-[23px]" aria-hidden />
                    </div>

                    {!point.isTop && (
                      <>
                        <span className="mt-2 h-6 w-px bg-slate-300" />
                        <p className="mb-1 mt-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                          {milestone.title}
                        </p>
                        <p className="line-clamp-2 px-2 text-[10px] leading-tight text-slate-500">
                          {milestone.description}
                        </p>
                      </>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default React.memo(RoadmapJourneyTimeline);
