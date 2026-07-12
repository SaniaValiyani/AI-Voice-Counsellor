import { useState } from "react";
import { Upload } from "lucide-react";

import {
  uploadResume,
} from "../../services/uploadService";

import {
  useCounsellorStore,
} from "../../store/counsellorStore";

import { notify } from "../../utils/toast";
import { serverUrl } from "../../utils/serverUrl";

export default function ResumeCard() {
  const profile =
    useCounsellorStore(
      (s) => s.studentProfile
    );

  const [uploading, setUploading] =
    useState(false);

  return (
    <div>
      Resume

      <label className="inline-flex items-center gap-2 cursor-pointer">
        <Upload size={16} />

        <span>
          {uploading
            ? "Uploading..."
            : "Upload Resume"}
        </span>

        <input
          hidden
          disabled={uploading}
          type="file"
          accept=".pdf"
          onChange={async (e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            // Max 5 MB
            if (file.size > 5 * 1024 * 1024) {
              notify.error(
                "Maximum file size is 5MB."
              );
              return;
            }

            // Only PDF
            if (file.type !== "application/pdf") {
              notify.error(
                "Only PDF files are allowed."
              );
              return;
            }

            setUploading(true);

            await uploadResume(file);

            setUploading(false);

            notify.success(
              "Resume uploaded successfully."
            );

            await useCounsellorStore
              .getState()
              .loadStudentProfile();
          }}
        />
      </label>

      {profile.resume && (
        <a
          href={`${serverUrl}/${profile.resume.replace(/\\/g, "/")}`}
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