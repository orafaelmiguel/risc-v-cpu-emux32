import { RAMDevice } from "./sys/ram";
import { ROMDevice } from "./sys/rom";
import { SystemInterface } from "./sys/sys";
import { toHexString } from "./utils/string-convert";

class RVI32System{
    rom = new ROMDevice
    ram = new RAMDevice

    bus = new SystemInterface(this.rom, this.ram)
}

const rv = new RVI32System()

rv.bus.write(0x20400000, 0x01020304)


console.log(toHexString(rv.bus.read(0x20000000)))
