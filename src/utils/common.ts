import { test } from "@playwright/test";

export function log(logVal: string) {
  const testName = test.info().title;
  console.log(`[${testName}] ${logVal}`);
}

export function classLog(logVal: string) {}
