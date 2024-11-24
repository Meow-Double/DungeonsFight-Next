import { caller } from "@/server/routes";
import { ProfileBag, ProfileInfo } from "@/src/components";
import { Container } from "@/src/ui/components";
import { getTypesStatics } from "@/src/utils/getTypesStatics";

interface ProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;
  const user = await caller.getUser({ params: { id: Number(id) } });
  const bag = await caller.getUserBag({
    params: { userId: Number(id) },
  });

  const types: RareStatistics = getTypesStatics(bag);

  return (
    <Container>
      <div>
        <ProfileInfo
          types={types}
          username={user?.username}
          avatarUrl={user?.avatarUrl}
          email={user?.email}
          baner={user.baner}
        />
        <ProfileBag bag={bag} />
      </div>
    </Container>
  );
};

export default ProfilePage;
