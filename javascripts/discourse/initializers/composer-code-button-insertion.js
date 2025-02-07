import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "composer-code-button-to-insertions",
  
  initialize(owner) {
    withPluginApi("0.8.7", (api) => {
      const capabilities = owner.lookup("capabilities:main");

      if (capabilities.touch) {
        api.onToolbarCreate(function(toolbar) {
          toolbar.addButton({
            id: "code",
            group: "insertions",
            icon: "code",
            preventFocus: true,
            trimLeading: true,
            perform: (e) => e.formatCode(),
          });
        });
      }
    });
  },
};
