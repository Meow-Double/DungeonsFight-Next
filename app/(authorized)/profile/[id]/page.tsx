import type { Metadata } from "next";

import { caller } from "@/server/routes";
import { ProfileBag, ProfileInfo } from "@/src/components";
import { Container } from "@/src/ui/components";
import { getTypesStatics } from "@/src/utils/helpers";

export const metadata: Metadata = {
  title: "Dungeons Fight | Профиль",
  description: "Профиль игрока",
  icons: "logo.svg",
};

interface ProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;
  const user = await caller.getUser({ params: { id: Number(id) } });
  console.log(user);
  const bag = await caller.getUserBag({
    params: { userId: Number(id) },
  });

  const types = getTypesStatics(bag);

  return (
    <Container>
      <div>
        <ProfileInfo
          types={types}
          username={user?.username}
          avatarUrl={user?.avatarUrl}
          email={user?.email}
          baner={user.baner}
          id={Number(id)}
        />
        <ProfileBag bag={bag} />
      </div>
    </Container>
  );
};

export default ProfilePage;
