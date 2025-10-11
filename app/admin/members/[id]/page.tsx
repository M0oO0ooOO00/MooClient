import AdminPageLayout from "../../AdminPageLayout";
import Detail from "@/features/admin/ui/Detail";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <AdminPageLayout>
      <Detail id={params.id} />
    </AdminPageLayout>
  );
}
