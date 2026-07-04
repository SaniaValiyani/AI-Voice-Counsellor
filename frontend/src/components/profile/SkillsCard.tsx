import ChipInput from "./ChipInput";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function SkillsCard() {
  const profile =
    useCounsellorStore(
      (s) => s.studentProfile
    );

  const updateProfile =
    useCounsellorStore(
      (s) => s.updateProfile
    );

  return (
    <ChipInput
      title="Skills"
      values={profile.skills}
      onChange={(skills) =>
        updateProfile({ skills })
      }
    />
  );
}