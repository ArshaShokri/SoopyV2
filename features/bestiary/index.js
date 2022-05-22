/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />
import { m } from "../../../mappings/mappings";
import Feature from "../../featureClass/class";
import { drawCoolWaypoint } from "../../utils/renderUtils";
import SettingBase from "../settings/settingThings/settingBase";
import ToggleSetting from "../settings/settingThings/toggle";


class Waypoints extends Feature {
    constructor() {
        super()
    }

    onEnable() {
        this.initVariables()

        this.bestiaryData = JSON.parse(FileLib.read("soopyAddonsData", "bestiaryData.json") || "{}")
        this.bestiaryChanged = false
    }

    initVariables() {

    }

    onDisable() {
        if (this.bestiaryChanged) {
            FileLib.write("soopyAddonsData", "bestiaryData.json", JSON.stringify(this.bestiaryData))
        }

        this.initVariables()
    }
}

module.exports = {
    class: new Waypoints()
}