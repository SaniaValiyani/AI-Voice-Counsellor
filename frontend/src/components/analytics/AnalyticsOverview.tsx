import { useCounsellorStore } from "../../store/counsellorStore";

export default function AnalyticsOverview() {

    const profile =
        useCounsellorStore(
            state=>state.studentProfile
        );

    const cards=[

        {
            title:"Career Readiness",
            value:`${profile.careerReadiness}%`,
            color:"from-cyan-500 to-blue-600",
        },

        {
            title:"Current Level",
            value:`Level ${profile.level}`,
            color:"from-purple-500 to-pink-500",
        },

        {
            title:"XP",
            value:profile.xp,
            color:"from-green-500 to-emerald-600",
        },

        {
            title:"Learning Streak",
            value:`${profile.learningStreak} Days`,
            color:"from-orange-500 to-red-500",
        },

    ];

    return(

        <div className="grid lg:grid-cols-4 gap-6">

            {cards.map(card=>(

                <div
                key={card.title}
                className={`rounded-3xl bg-gradient-to-r ${card.color} p-6 shadow-lg`}
                >

                    <p className="text-white/70">

                        {card.title}

                    </p>

                    <h1 className="text-white text-4xl font-bold mt-4">

                        {card.value}

                    </h1>

                </div>

            ))}

        </div>

    );

}