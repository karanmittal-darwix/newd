import { Zap, Eye } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  label: string;
  headline: React.ReactNode;
  description: string;
  variant: "white" | "lavender";
}

const Card: React.FC<CardProps> = ({ icon, label, headline, description, variant }) => {
  const bg = variant === "white" ? "bg-white" : "bg-[#EEEEF8]";
  const iconBg = variant === "white" ? "bg-[#EEEEF8]" : "bg-white";

  return (
    <div className={`${bg} rounded-2xl p-8 flex flex-col gap-6 flex-1 min-w-0`}>
      {/* Label row */}
      <div className="flex items-center gap-3">
        <div className={`${iconBg} rounded-xl p-2.5 flex items-center justify-center`}>
          {icon}
        </div>
        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6B6B8D]">
          {label}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-[1.65rem] leading-[1.25] font-bold text-[#111827]">
        {headline}
      </h2>

      {/* Description */}
      <p className="text-[0.875rem] leading-[1.65] text-[#6B6B8D] font-normal">
        {description}
      </p>
    </div>
  );
};

export default function MissionVisionCards() {
  return (
    <div className="w-full flex items-center justify-center px-6 py-8">
      <div className="flex gap-5 max-w-4xl w-full flex-col sm:flex-row">
        {/* Mission Card */}
        <Card
          variant="white"
          icon={<Zap size={18} strokeWidth={2} className="text-[#5B5BD6]" />}
          label="Our Mission"
          headline={
            <>
              Empower every BFSI revenue team to reach its{" "}
              <span className="text-[#5B5BD6]">full potential</span> through
              agentic AI.
            </>
          }
          description="We simplify complex BFSI workflows with agentic AI through real-time coaching, compliant interactions, and workflow automation so revenue teams can focus on outcomes."
        />

        {/* Vision Card */}
        <Card
          variant="lavender"
          icon={<Eye size={18} strokeWidth={2} className="text-[#5B5BD6]" />}
          label="Our Vision"
          headline={
            <>
              A world where every BFSI conversation is{" "}
              <span className="text-[#5B5BD6]">
                intelligent, compliant, and valuable
              </span>{" "}
              by default.
            </>
          }
          description="We envision a BFSI ecosystem where every customer conversation is intelligent, compliant, and action-driven powered by AI, real-time insights, and workflow automation."
        />
      </div>
    </div>
  );
}
