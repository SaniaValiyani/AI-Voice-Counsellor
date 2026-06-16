const conversations = [
  {
    student: "Rahul Sharma",
    language: "Hindi",
    score: 88,
  },
  {
    student: "Priya Patel",
    language: "Gujarati",
    score: 72,
  },
  {
    student: "Aarav Deshmukh",
    language: "Marathi",
    score: 91,
  },
];

export default function RecentConversations() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-xl mb-5">
        Recent Conversations
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-2">
              Student
            </th>

            <th className="text-left py-2">
              Language
            </th>

            <th className="text-left py-2">
              Lead Score
            </th>
          </tr>
        </thead>

        <tbody>
          {conversations.map((item) => (
            <tr
              key={item.student}
              className="border-t border-slate-800"
            >
              <td className="py-4 text-white">
                {item.student}
              </td>

              <td className="py-4 text-slate-300">
                {item.language}
              </td>

              <td className="py-4 text-cyan-400">
                {item.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}