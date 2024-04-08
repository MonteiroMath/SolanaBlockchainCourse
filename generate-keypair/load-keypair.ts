import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is ${keypair.publicKey.toBase58()}`);


let secretKeyString = Buffer.from(keypair.secretKey).toString('hex');
console.log(`The public key is ${secretKeyString}`);