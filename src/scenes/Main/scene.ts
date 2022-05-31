import { Scenes } from "scene-preset/lib/types/consulters";
import lightFollower from "../../stages/lightFollower";
import nightSkyReflectors from "../../stages/nightSkyReflectors";

export default {
  ...lightFollower,
  ...nightSkyReflectors,
} as Scenes;
