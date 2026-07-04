import ChipInput from "./ChipInput";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function InterestsCard() {
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
      title="Interests"
      values={profile.interests}
      onChange={(interests) =>
        updateProfile({ interests })
      }
    />
  );
}