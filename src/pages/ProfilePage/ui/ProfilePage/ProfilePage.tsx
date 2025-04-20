import { fetchProfileData, ProfileCard } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/model";
import { FC, memo, useEffect } from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import styles from "./ProfilePage.module.scss";

export const ProfilePage: FC = memo(function ProfilePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={styles.profilePage}>
      <ProfileHeader />
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
