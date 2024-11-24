# RISC-V CPU Emulator

This project is an emulation of a CPU based on the RISC-V architecture, developed in TypeScript. Currently, it includes the implementation of a memory mapping system using a RAM device.

🚧 This repository is under development 🚧

### Functionalities 🔧

## Emulate RAM
- RAMDevice that implements a 32-bit array for storage.
- Support for reading and writing memory with addressing adjusted to the configured size.
- Default size set to 4 MB.
```bash
export const RAMSize = 1024 * 1024 * 4
```

## Memory Operations
The operation is mapped to the corresponding device (RAM or ROM) based on the address provided.
```bash
rv.bus.write(0x20400000, 0x01020304)
```
Reads the value stored at the given address and converts it to a hexadecimal representation
```bash
console.log(toHexString(rv.bus.read(0x20000000)))
```
 
