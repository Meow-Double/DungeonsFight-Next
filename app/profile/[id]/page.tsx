import { ProfileBag, ProfileInfo } from "@/src/components";
import { Container } from "@/src/ui/components";

const ProfilePage = () => {
  return (
    <Container>
      <div>
        <ProfileInfo />
        <ProfileBag />
      </div>
    </Container>
  );
};

export default ProfilePage;
