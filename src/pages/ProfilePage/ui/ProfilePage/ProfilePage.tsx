import { fetchProfileData, ProfileCard } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/model";
import { FC, memo, useEffect } from "react";

export const ProfilePage: FC = memo(function ProfilePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
