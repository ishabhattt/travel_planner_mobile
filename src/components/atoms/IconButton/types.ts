import {
  ApplicationStackParamList,
  ApplicationTabParamList,
} from "@/types/navigation";
type ApplicationRouteKeys =
  | keyof ApplicationStackParamList
  | keyof ApplicationTabParamList;

export type IconButtonProps = {
  iconName: string;
  title: string;
  description: string;
  iconType: "Material" | "MaterialComunity";
  id: number;
  color: string;
  backgroundColor: string;
  screen: ApplicationRouteKeys;
};
