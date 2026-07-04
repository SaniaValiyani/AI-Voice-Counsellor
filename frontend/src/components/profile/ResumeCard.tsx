import { Upload } from "lucide-react";

import {
  uploadResume,
} from "../../services/uploadService";

import {
  useCounsellorStore,
} from "../../store/counsellorStore";

export default function ResumeCard() {
  const profile =
    useCounsellorStore(
      (s) => s.studentProfile
    );

  return (
    <div>
      <h3>Resume</h3>

      <label className="inline-flex items-center gap-2 cursor-pointer">
        <Upload size={16} />

        <span>Upload Resume</span>

        <input
          hidden
          type="file"
          accept=".pdf"
          onChange={async (e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            // Max 5 MB
            if (file.size > 5 * 1024 * 1024) {
              alert("Maximum size is 5MB");
              return;
            }

            // Only PDF
            if (file.type !== "application/pdf") {
              alert("Only PDF allowed");
              return;
            }

            await uploadResume(file);

            await useCounsellorStore
              .getState()
              .loadStudentProfile();
          }}
        />
      </label>

      {profile.resume && (
        <a
          href={`http://localhost:5000/${profile.resume.replace(
            /\\/g,
            "/"
          )}`}
          target="_blank"
          rel="noreferrer"
          className="block mt-4 text-cyan-400"
        >
          View Resume
        </a>
      )}
    </div>
  );
}