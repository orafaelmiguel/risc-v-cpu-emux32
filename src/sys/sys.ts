import { RAMDevice } from "./ram"
import { ROMDevice } from "./rom"
import { toHexString } from "../utils/string-convert"

export interface MMIODevice {
    read(address: number): number
    write(address: number, value: number): void
}

export enum MemoryMap {
    ProgramROMStart = 0x10000000,
    ProgramROMEnd = 0x1fffffff,
    RAMStart = 0x20000000,
    RAMRnd = 0x2fffffff
}

export class SystemInterface implements MMIODevice {
    private rom: ROMDevice
    private ram: RAMDevice

    constructor(rom: ROMDevice, ram: RAMDevice) {
        this.rom = rom
        this.ram = ram
    }

    read(address: number) {
        if ((address & 0b11) != 0) {
            throw new Error('Error on read address 0x' + toHexString(address))
        }

        if ((address & MemoryMap.ProgramROMStart) === MemoryMap.ProgramROMStart) {
            return this.rom.read((address & 0x0fffffff) >> 2)
        }

        if ((address & MemoryMap.RAMStart) === MemoryMap.RAMStart) {
            return this.ram.read((address & 0x0fffffff) >> 2)
        }

        return 0
    }

    write(address: number, value: number) {
        if ((address & 0b11) != 0) {
            throw new Error('Error on write address 0x' + toHexString(address))
        }

        if ((address & MemoryMap.RAMStart) === MemoryMap.RAMStart) {
            return this.ram.write((address & 0x0fffffff) >> 2, value)
        }

        return 0
    }
}