// Complete MTU Pricing Table with 157 rows
export interface MTUTier {
  sku: string;
  mtu: number;
  pricePerMtu: number;
  monthlyPrice: number;
}

export const MTU_PRICING_TABLE: MTUTier[] = [
  { sku: 'MTU_0001', mtu: 1000, pricePerMtu: 0.0329, monthlyPrice: 32.90 },
  { sku: 'MTU_0002', mtu: 1500, pricePerMtu: 0.03285, monthlyPrice: 49.28 },
  { sku: 'MTU_0003', mtu: 2000, pricePerMtu: 0.0328, monthlyPrice: 65.60 },
  { sku: 'MTU_0004', mtu: 2500, pricePerMtu: 0.03275, monthlyPrice: 81.88 },
  { sku: 'MTU_0005', mtu: 3000, pricePerMtu: 0.0327, monthlyPrice: 98.10 },
  { sku: 'MTU_0006', mtu: 3500, pricePerMtu: 0.03265, monthlyPrice: 114.28 },
  { sku: 'MTU_0007', mtu: 4000, pricePerMtu: 0.0326, monthlyPrice: 130.40 },
  { sku: 'MTU_0008', mtu: 4500, pricePerMtu: 0.03255, monthlyPrice: 146.48 },
  { sku: 'MTU_0009', mtu: 5000, pricePerMtu: 0.0325, monthlyPrice: 162.50 },
  { sku: 'MTU_0010', mtu: 5500, pricePerMtu: 0.03245, monthlyPrice: 178.48 },
  { sku: 'MTU_0011', mtu: 6000, pricePerMtu: 0.0324, monthlyPrice: 194.40 },
  { sku: 'MTU_0012', mtu: 6500, pricePerMtu: 0.03235, monthlyPrice: 210.27 },
  { sku: 'MTU_0013', mtu: 7000, pricePerMtu: 0.0323, monthlyPrice: 226.10 },
  { sku: 'MTU_0014', mtu: 7500, pricePerMtu: 0.03225, monthlyPrice: 241.88 },
  { sku: 'MTU_0015', mtu: 8000, pricePerMtu: 0.0322, monthlyPrice: 257.60 },
  { sku: 'MTU_0016', mtu: 8500, pricePerMtu: 0.03215, monthlyPrice: 273.27 },
  { sku: 'MTU_0017', mtu: 9000, pricePerMtu: 0.0321, monthlyPrice: 288.90 },
  { sku: 'MTU_0018', mtu: 9500, pricePerMtu: 0.03205, monthlyPrice: 304.48 },
  { sku: 'MTU_0019', mtu: 10000, pricePerMtu: 0.032, monthlyPrice: 320.00 },
  { sku: 'MTU_0020', mtu: 10000, pricePerMtu: 0.0319, monthlyPrice: 319.00 },
  { sku: 'MTU_0021', mtu: 11000, pricePerMtu: 0.031827, monthlyPrice: 350.09 },
  { sku: 'MTU_0022', mtu: 12000, pricePerMtu: 0.031753, monthlyPrice: 381.04 },
  { sku: 'MTU_0023', mtu: 13000, pricePerMtu: 0.03168, monthlyPrice: 411.84 },
  { sku: 'MTU_0024', mtu: 14000, pricePerMtu: 0.031607, monthlyPrice: 442.49 },
  { sku: 'MTU_0025', mtu: 15000, pricePerMtu: 0.031533, monthlyPrice: 473.00 },
  { sku: 'MTU_0026', mtu: 16000, pricePerMtu: 0.03146, monthlyPrice: 503.36 },
  { sku: 'MTU_0027', mtu: 17000, pricePerMtu: 0.031387, monthlyPrice: 533.57 },
  { sku: 'MTU_0028', mtu: 18000, pricePerMtu: 0.031313, monthlyPrice: 563.64 },
  { sku: 'MTU_0029', mtu: 19000, pricePerMtu: 0.03124, monthlyPrice: 593.56 },
  { sku: 'MTU_0030', mtu: 20000, pricePerMtu: 0.031167, monthlyPrice: 623.33 },
  { sku: 'MTU_0031', mtu: 21000, pricePerMtu: 0.031093, monthlyPrice: 652.96 },
  { sku: 'MTU_0032', mtu: 22000, pricePerMtu: 0.03102, monthlyPrice: 682.44 },
  { sku: 'MTU_0033', mtu: 23000, pricePerMtu: 0.030947, monthlyPrice: 711.77 },
  { sku: 'MTU_0034', mtu: 24000, pricePerMtu: 0.030873, monthlyPrice: 740.96 },
  { sku: 'MTU_0035', mtu: 25000, pricePerMtu: 0.0308, monthlyPrice: 770.00 },
  { sku: 'MTU_0036', mtu: 25000, pricePerMtu: 0.0307, monthlyPrice: 767.50 },
  { sku: 'MTU_0037', mtu: 27000, pricePerMtu: 0.030592, monthlyPrice: 825.98 },
  { sku: 'MTU_0038', mtu: 29000, pricePerMtu: 0.030483, monthlyPrice: 884.02 },
  { sku: 'MTU_0039', mtu: 31000, pricePerMtu: 0.030375, monthlyPrice: 941.62 },
  { sku: 'MTU_0040', mtu: 33000, pricePerMtu: 0.030267, monthlyPrice: 998.80 },
  { sku: 'MTU_0041', mtu: 35000, pricePerMtu: 0.030158, monthlyPrice: 1055.54 },
  { sku: 'MTU_0042', mtu: 37000, pricePerMtu: 0.03005, monthlyPrice: 1111.85 },
  { sku: 'MTU_0043', mtu: 39000, pricePerMtu: 0.029942, monthlyPrice: 1167.72 },
  { sku: 'MTU_0044', mtu: 41000, pricePerMtu: 0.029833, monthlyPrice: 1223.17 },
  { sku: 'MTU_0045', mtu: 43000, pricePerMtu: 0.029725, monthlyPrice: 1278.18 },
  { sku: 'MTU_0046', mtu: 45000, pricePerMtu: 0.029617, monthlyPrice: 1332.75 },
  { sku: 'MTU_0047', mtu: 47000, pricePerMtu: 0.029508, monthlyPrice: 1386.89 },
  { sku: 'MTU_0048', mtu: 49000, pricePerMtu: 0.0294, monthlyPrice: 1440.60 },
  { sku: 'MTU_0049', mtu: 50000, pricePerMtu: 0.0293, monthlyPrice: 1465.00 },
  { sku: 'MTU_0050', mtu: 52000, pricePerMtu: 0.02924, monthlyPrice: 1520.48 },
  { sku: 'MTU_0051', mtu: 54000, pricePerMtu: 0.02918, monthlyPrice: 1575.72 },
  { sku: 'MTU_0052', mtu: 56000, pricePerMtu: 0.02912, monthlyPrice: 1630.72 },
  { sku: 'MTU_0053', mtu: 58000, pricePerMtu: 0.02906, monthlyPrice: 1685.48 },
  { sku: 'MTU_0054', mtu: 60000, pricePerMtu: 0.029, monthlyPrice: 1740.00 },
  { sku: 'MTU_0055', mtu: 62000, pricePerMtu: 0.02894, monthlyPrice: 1794.28 },
  { sku: 'MTU_0056', mtu: 64000, pricePerMtu: 0.02888, monthlyPrice: 1848.32 },
  { sku: 'MTU_0057', mtu: 66000, pricePerMtu: 0.02882, monthlyPrice: 1902.12 },
  { sku: 'MTU_0058', mtu: 68000, pricePerMtu: 0.02876, monthlyPrice: 1955.68 },
  { sku: 'MTU_0059', mtu: 70000, pricePerMtu: 0.0287, monthlyPrice: 2009.00 },
  { sku: 'MTU_0060', mtu: 72000, pricePerMtu: 0.02864, monthlyPrice: 2062.08 },
  { sku: 'MTU_0061', mtu: 74000, pricePerMtu: 0.02858, monthlyPrice: 2114.92 },
  { sku: 'MTU_0062', mtu: 76000, pricePerMtu: 0.02852, monthlyPrice: 2167.52 },
  { sku: 'MTU_0063', mtu: 78000, pricePerMtu: 0.02846, monthlyPrice: 2219.88 },
  { sku: 'MTU_0064', mtu: 80000, pricePerMtu: 0.0284, monthlyPrice: 2272.00 },
  { sku: 'MTU_0065', mtu: 82000, pricePerMtu: 0.02834, monthlyPrice: 2323.88 },
  { sku: 'MTU_0066', mtu: 84000, pricePerMtu: 0.02828, monthlyPrice: 2375.52 },
  { sku: 'MTU_0067', mtu: 86000, pricePerMtu: 0.02822, monthlyPrice: 2426.92 },
  { sku: 'MTU_0068', mtu: 88000, pricePerMtu: 0.02816, monthlyPrice: 2478.08 },
  { sku: 'MTU_0069', mtu: 90000, pricePerMtu: 0.0281, monthlyPrice: 2529.00 },
  { sku: 'MTU_0070', mtu: 92000, pricePerMtu: 0.02804, monthlyPrice: 2579.68 },
  { sku: 'MTU_0071', mtu: 94000, pricePerMtu: 0.02798, monthlyPrice: 2630.12 },
  { sku: 'MTU_0072', mtu: 96000, pricePerMtu: 0.02792, monthlyPrice: 2680.32 },
  { sku: 'MTU_0073', mtu: 98000, pricePerMtu: 0.02786, monthlyPrice: 2730.28 },
  { sku: 'MTU_0074', mtu: 100000, pricePerMtu: 0.0278, monthlyPrice: 2780.00 },
  { sku: 'MTU_0075', mtu: 100000, pricePerMtu: 0.0277, monthlyPrice: 2770.00 },
  { sku: 'MTU_0076', mtu: 105000, pricePerMtu: 0.02751, monthlyPrice: 2888.55 },
  { sku: 'MTU_0077', mtu: 110000, pricePerMtu: 0.02732, monthlyPrice: 3005.20 },
  { sku: 'MTU_0078', mtu: 115000, pricePerMtu: 0.02713, monthlyPrice: 3119.95 },
  { sku: 'MTU_0079', mtu: 120000, pricePerMtu: 0.02694, monthlyPrice: 3232.80 },
  { sku: 'MTU_0080', mtu: 125000, pricePerMtu: 0.02675, monthlyPrice: 3343.75 },
  { sku: 'MTU_0081', mtu: 130000, pricePerMtu: 0.02656, monthlyPrice: 3452.80 },
  { sku: 'MTU_0082', mtu: 135000, pricePerMtu: 0.02637, monthlyPrice: 3559.95 },
  { sku: 'MTU_0083', mtu: 140000, pricePerMtu: 0.02618, monthlyPrice: 3665.20 },
  { sku: 'MTU_0084', mtu: 145000, pricePerMtu: 0.02599, monthlyPrice: 3768.55 },
  { sku: 'MTU_0085', mtu: 150000, pricePerMtu: 0.0258, monthlyPrice: 3870.00 },
  { sku: 'MTU_0086', mtu: 155000, pricePerMtu: 0.02561, monthlyPrice: 3969.55 },
  { sku: 'MTU_0087', mtu: 160000, pricePerMtu: 0.02542, monthlyPrice: 4067.20 },
  { sku: 'MTU_0088', mtu: 165000, pricePerMtu: 0.02523, monthlyPrice: 4162.95 },
  { sku: 'MTU_0089', mtu: 170000, pricePerMtu: 0.02504, monthlyPrice: 4256.80 },
  { sku: 'MTU_0090', mtu: 175000, pricePerMtu: 0.02485, monthlyPrice: 4348.75 },
  { sku: 'MTU_0091', mtu: 180000, pricePerMtu: 0.02466, monthlyPrice: 4438.80 },
  { sku: 'MTU_0092', mtu: 185000, pricePerMtu: 0.02447, monthlyPrice: 4526.95 },
  { sku: 'MTU_0093', mtu: 190000, pricePerMtu: 0.02428, monthlyPrice: 4613.20 },
  { sku: 'MTU_0094', mtu: 195000, pricePerMtu: 0.02409, monthlyPrice: 4697.55 },
  { sku: 'MTU_0095', mtu: 200000, pricePerMtu: 0.0239, monthlyPrice: 4780.00 },
  { sku: 'MTU_0096', mtu: 205000, pricePerMtu: 0.02371, monthlyPrice: 4860.55 },
  { sku: 'MTU_0097', mtu: 210000, pricePerMtu: 0.02352, monthlyPrice: 4939.20 },
  { sku: 'MTU_0098', mtu: 215000, pricePerMtu: 0.02333, monthlyPrice: 5015.95 },
  { sku: 'MTU_0099', mtu: 220000, pricePerMtu: 0.02314, monthlyPrice: 5090.80 },
  { sku: 'MTU_0100', mtu: 225000, pricePerMtu: 0.02295, monthlyPrice: 5163.75 },
  { sku: 'MTU_0101', mtu: 230000, pricePerMtu: 0.02276, monthlyPrice: 5234.80 },
  { sku: 'MTU_0102', mtu: 235000, pricePerMtu: 0.02257, monthlyPrice: 5303.95 },
  { sku: 'MTU_0103', mtu: 240000, pricePerMtu: 0.02238, monthlyPrice: 5371.20 },
  { sku: 'MTU_0104', mtu: 245000, pricePerMtu: 0.02219, monthlyPrice: 5436.55 },
  { sku: 'MTU_0105', mtu: 250000, pricePerMtu: 0.022, monthlyPrice: 5500.00 },
  { sku: 'MTU_0106', mtu: 250000, pricePerMtu: 0.0219, monthlyPrice: 5475.00 },
  { sku: 'MTU_0107', mtu: 260000, pricePerMtu: 0.021744, monthlyPrice: 5653.44 },
  { sku: 'MTU_0108', mtu: 270000, pricePerMtu: 0.021588, monthlyPrice: 5828.76 },
  { sku: 'MTU_0109', mtu: 280000, pricePerMtu: 0.021432, monthlyPrice: 6000.96 },
  { sku: 'MTU_0110', mtu: 290000, pricePerMtu: 0.021276, monthlyPrice: 6170.04 },
  { sku: 'MTU_0111', mtu: 300000, pricePerMtu: 0.02112, monthlyPrice: 6336.00 },
  { sku: 'MTU_0112', mtu: 310000, pricePerMtu: 0.020964, monthlyPrice: 6498.84 },
  { sku: 'MTU_0113', mtu: 320000, pricePerMtu: 0.020808, monthlyPrice: 6658.56 },
  { sku: 'MTU_0114', mtu: 330000, pricePerMtu: 0.020652, monthlyPrice: 6815.16 },
  { sku: 'MTU_0115', mtu: 340000, pricePerMtu: 0.020496, monthlyPrice: 6968.64 },
  { sku: 'MTU_0116', mtu: 350000, pricePerMtu: 0.02034, monthlyPrice: 7119.00 },
  { sku: 'MTU_0117', mtu: 360000, pricePerMtu: 0.020184, monthlyPrice: 7266.24 },
  { sku: 'MTU_0118', mtu: 370000, pricePerMtu: 0.020028, monthlyPrice: 7410.36 },
  { sku: 'MTU_0119', mtu: 380000, pricePerMtu: 0.019872, monthlyPrice: 7551.36 },
  { sku: 'MTU_0120', mtu: 390000, pricePerMtu: 0.019716, monthlyPrice: 7689.24 },
  { sku: 'MTU_0121', mtu: 400000, pricePerMtu: 0.01956, monthlyPrice: 7824.00 },
  { sku: 'MTU_0122', mtu: 410000, pricePerMtu: 0.019404, monthlyPrice: 7955.64 },
  { sku: 'MTU_0123', mtu: 420000, pricePerMtu: 0.019248, monthlyPrice: 8084.16 },
  { sku: 'MTU_0124', mtu: 430000, pricePerMtu: 0.019092, monthlyPrice: 8209.56 },
  { sku: 'MTU_0125', mtu: 440000, pricePerMtu: 0.018936, monthlyPrice: 8331.84 },
  { sku: 'MTU_0126', mtu: 450000, pricePerMtu: 0.01878, monthlyPrice: 8451.00 },
  { sku: 'MTU_0127', mtu: 460000, pricePerMtu: 0.018624, monthlyPrice: 8567.04 },
  { sku: 'MTU_0128', mtu: 470000, pricePerMtu: 0.018468, monthlyPrice: 8679.96 },
  { sku: 'MTU_0129', mtu: 480000, pricePerMtu: 0.018312, monthlyPrice: 8789.76 },
  { sku: 'MTU_0130', mtu: 490000, pricePerMtu: 0.018156, monthlyPrice: 8896.44 },
  { sku: 'MTU_0131', mtu: 500000, pricePerMtu: 0.018, monthlyPrice: 9000.00 },
  { sku: 'MTU_0132', mtu: 500000, pricePerMtu: 0.0179, monthlyPrice: 8950.00 },
  { sku: 'MTU_0133', mtu: 520000, pricePerMtu: 0.017804, monthlyPrice: 9258.08 },
  { sku: 'MTU_0134', mtu: 540000, pricePerMtu: 0.017708, monthlyPrice: 9562.32 },
  { sku: 'MTU_0135', mtu: 560000, pricePerMtu: 0.017612, monthlyPrice: 9862.72 },
  { sku: 'MTU_0136', mtu: 580000, pricePerMtu: 0.017516, monthlyPrice: 10159.28 },
  { sku: 'MTU_0137', mtu: 600000, pricePerMtu: 0.01742, monthlyPrice: 10452.00 },
  { sku: 'MTU_0138', mtu: 620000, pricePerMtu: 0.017324, monthlyPrice: 10740.88 },
  { sku: 'MTU_0139', mtu: 640000, pricePerMtu: 0.017228, monthlyPrice: 11025.92 },
  { sku: 'MTU_0140', mtu: 660000, pricePerMtu: 0.017132, monthlyPrice: 11307.12 },
  { sku: 'MTU_0141', mtu: 680000, pricePerMtu: 0.017036, monthlyPrice: 11584.48 },
  { sku: 'MTU_0142', mtu: 700000, pricePerMtu: 0.01694, monthlyPrice: 11858.00 },
  { sku: 'MTU_0143', mtu: 720000, pricePerMtu: 0.016844, monthlyPrice: 12127.68 },
  { sku: 'MTU_0144', mtu: 740000, pricePerMtu: 0.016748, monthlyPrice: 12393.52 },
  { sku: 'MTU_0145', mtu: 760000, pricePerMtu: 0.016652, monthlyPrice: 12655.52 },
  { sku: 'MTU_0146', mtu: 780000, pricePerMtu: 0.016556, monthlyPrice: 12913.68 },
  { sku: 'MTU_0147', mtu: 800000, pricePerMtu: 0.01646, monthlyPrice: 13168.00 },
  { sku: 'MTU_0148', mtu: 820000, pricePerMtu: 0.016364, monthlyPrice: 13418.48 },
  { sku: 'MTU_0149', mtu: 840000, pricePerMtu: 0.016268, monthlyPrice: 13665.12 },
  { sku: 'MTU_0150', mtu: 860000, pricePerMtu: 0.016172, monthlyPrice: 13907.92 },
  { sku: 'MTU_0151', mtu: 880000, pricePerMtu: 0.016076, monthlyPrice: 14146.88 },
  { sku: 'MTU_0152', mtu: 900000, pricePerMtu: 0.01598, monthlyPrice: 14382.00 },
  { sku: 'MTU_0153', mtu: 920000, pricePerMtu: 0.015884, monthlyPrice: 14613.28 },
  { sku: 'MTU_0154', mtu: 940000, pricePerMtu: 0.015788, monthlyPrice: 14840.72 },
  { sku: 'MTU_0155', mtu: 960000, pricePerMtu: 0.015692, monthlyPrice: 15064.32 },
  { sku: 'MTU_0156', mtu: 980000, pricePerMtu: 0.015596, monthlyPrice: 15284.08 },
  { sku: 'MTU_0157', mtu: 1000000, pricePerMtu: 0.0155, monthlyPrice: 15500.00 },
];

// Get unique MTU values for slider (remove duplicates, take lower price)
export const getUniqueMTUTiers = (): MTUTier[] => {
  const mtuMap = new Map<number, MTUTier>();
  
  MTU_PRICING_TABLE.forEach(tier => {
    const existing = mtuMap.get(tier.mtu);
    if (!existing || tier.monthlyPrice < existing.monthlyPrice) {
      mtuMap.set(tier.mtu, tier);
    }
  });
  
  return Array.from(mtuMap.values()).sort((a, b) => a.mtu - b.mtu);
};

// Find the closest tier for a given MTU value
export const findClosestTier = (mtu: number): MTUTier => {
  const tiers = getUniqueMTUTiers();
  
  if (mtu <= tiers[0].mtu) return tiers[0];
  if (mtu >= tiers[tiers.length - 1].mtu) return tiers[tiers.length - 1];
  
  for (let i = 0; i < tiers.length - 1; i++) {
    if (mtu >= tiers[i].mtu && mtu <= tiers[i + 1].mtu) {
      // Return the closer tier
      const diffLower = mtu - tiers[i].mtu;
      const diffUpper = tiers[i + 1].mtu - mtu;
      return diffLower <= diffUpper ? tiers[i] : tiers[i + 1];
    }
  }
  
  return tiers[0];
};

// Interpolate price for any MTU value
export const interpolatePrice = (mtu: number): { monthlyPrice: number; pricePerMtu: number } => {
  const tiers = getUniqueMTUTiers();
  
  if (mtu <= tiers[0].mtu) {
    return { monthlyPrice: tiers[0].monthlyPrice, pricePerMtu: tiers[0].pricePerMtu };
  }
  if (mtu >= tiers[tiers.length - 1].mtu) {
    return { 
      monthlyPrice: tiers[tiers.length - 1].monthlyPrice, 
      pricePerMtu: tiers[tiers.length - 1].pricePerMtu 
    };
  }
  
  for (let i = 0; i < tiers.length - 1; i++) {
    if (mtu >= tiers[i].mtu && mtu <= tiers[i + 1].mtu) {
      const ratio = (mtu - tiers[i].mtu) / (tiers[i + 1].mtu - tiers[i].mtu);
      const monthlyPrice = tiers[i].monthlyPrice + ratio * (tiers[i + 1].monthlyPrice - tiers[i].monthlyPrice);
      const pricePerMtu = monthlyPrice / mtu;
      return { monthlyPrice, pricePerMtu };
    }
  }
  
  return { monthlyPrice: tiers[0].monthlyPrice, pricePerMtu: tiers[0].pricePerMtu };
};

// Format MTU for display
export const formatMTU = (mtu: number): string => {
  if (mtu >= 1000000) return `${(mtu / 1000000).toFixed(0)}M`;
  if (mtu >= 1000) return `${(mtu / 1000).toFixed(0)}K`;
  return mtu.toString();
};

// Slider tick marks for UI
export const MTU_SLIDER_TICKS = [1000, 10000, 50000, 100000, 250000, 500000, 1000000];

