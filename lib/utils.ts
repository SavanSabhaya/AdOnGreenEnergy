import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
}
