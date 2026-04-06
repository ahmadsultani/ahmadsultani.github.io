import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  delay?: number;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  const { id, children, delay } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      id={id}
      className="w-full px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </motion.section>
  );
}
