import { Check, UserRound, UsersRound } from "lucide-react";

import { siteConfig, type TeamMember } from "@/config/site";

import { SectionHeading } from "../ui/SectionHeading";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass, sectionClass } from "./layout";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft">
      {member.image ? (
        <img
          src={member.image}
          alt={member.imageAlt ?? `Foto de ${member.name}`}
          loading="lazy"
          width={640}
          height={800}
          className="aspect-[5/4] w-full object-cover"
        />
      ) : (
        <div className="grid aspect-[5/4] place-items-center bg-gradient-to-br from-white to-primary-soft text-primary">
          <UserRound className="size-20 opacity-60" aria-hidden="true" />
        </div>
      )}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-primary-deep">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
          {member.role}
        </p>
        <p className="mt-3 text-base text-muted-foreground">{member.description}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section
      id="equipe"
      className={`wave-surface relative isolate overflow-hidden bg-primary-soft/70 ${sectionClass}`}
    >
      <WaveAccent className="-bottom-12 left-1/2 -z-10 h-52 w-[140%] -translate-x-1/2 text-primary-light" />
      <div className={`${containerClass} relative`}>
        <SectionHeading
          eyebrow={siteConfig.team.eyebrow}
          title={siteConfig.team.title}
          description={siteConfig.team.description}
        />

        {siteConfig.team.members.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:gap-10">
            {siteConfig.team.members.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.25rem] border border-white bg-white/90 shadow-card backdrop-blur-sm">
            <div className="grid md:grid-cols-[.7fr_1.3fr]">
              <div className="flex min-h-56 items-center justify-center bg-gradient-to-br from-primary-deep to-primary p-10 text-white">
                <div className="text-center">
                  <span className="mx-auto grid size-20 place-items-center rounded-full border border-white/25 bg-white/10">
                    <UsersRound className="size-9" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-display text-2xl font-semibold">Cuidado de perto</p>
                </div>
              </div>
              <div className="p-7 sm:p-10">
                <h3 className="text-2xl font-semibold text-primary-deep sm:text-3xl">
                  {siteConfig.team.emptyTitle}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {siteConfig.team.emptyDescription}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {siteConfig.team.values.map((value) => (
                    <li
                      key={value}
                      className="flex items-start gap-2 text-sm font-semibold text-primary-deep"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
