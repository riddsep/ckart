export default function rupiah(nums) {
  if (nums == null || isNaN(nums)) return "Rp0";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nums);
}
