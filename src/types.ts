import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/types";
import { ContractFactory } from "ethers";
import type { ethers } from "ethers";
import { HttpNetworkConfig } from "hardhat/types";
import { ReefSigner } from "./proxies/signers/ReefSigner";

export const REEF_CHAIN = "reef";
export const TESTNET_REEF = "testnet_reef";

export interface ProxyProvider {
  getContractFactory: (contract: string, signer?: ReefSigner | string) => Promise<ContractFactory>;
  getSigner(address: string): Promise<ReefSigner>;
  getSigners(): Promise<ReefSigner[]>;
}

export interface ReefNetworkConfig extends HttpNetworkConfig {
  path?: string;
}

export type HardhatEthers = typeof ethers & HardhatEthersHelpers;
