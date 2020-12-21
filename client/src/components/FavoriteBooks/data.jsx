import React from "react";

import AmazonImage from "../shared/AmazonImage";

export const categories = {
  leadership: "Leadership",
  it: "IT",
};

export const rankTypes = {
  diamond: "Diamond",
  gold: "Gold",
  silver: "Silver",
};

export const data = [
  {
    title: "Extreme Ownership",
    image: (
      <AmazonImage
        aLink={
          "https://www.amazon.com/gp/product/1250183863/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250183863&linkCode=as2&tag=kfiggins-20&linkId=254044fac4f57dd5077b249a51e838d5"
        }
        nestedImageSrc={
          "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1250183863&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20"
        }
        bottomImageSrc={
          "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=1250183863"
        }
      />
    ),
    categories: [categories.leadership],
    description: (
      <span>
        <strong>Extreme Ownership</strong> explains the SEAL leadership concepts
        crucial to accomplishing the most difficult missions in combat and how
        to apply them to any group, team, or organization. It provides the
        reader with Jocko and Leif's formula for success: the mindset and
        guiding principles that enable SEAL combat units to achieve
        extraordinary results. It demonstrates how to apply these directly to
        business and life to likewise achieve victory.
      </span>
    ),
    rank: rankTypes.diamond,
  },
  {
    title: "Rework",
    image: (
      <AmazonImage
        aLink={
          "https://www.amazon.com/gp/product/0307463745/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307463745&linkCode=as2&tag=kfiggins-20&linkId=b457b60ebe3215f0b6aa31847d25f280"
        }
        nestedImageSrc={
          "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0307463745&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20"
        }
        bottomImageSrc={
          "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=0307463745"
        }
      />
    ),
    categories: [categories.leadership],
    rank: rankTypes.gold,
  },
  {
    title: "The Phoenix Project",
    image: (
      <AmazonImage
        aLink={
          "https://www.amazon.com/gp/product/1942788290/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1942788290&linkCode=as2&tag=kfiggins-20&linkId=e6f4bf2800e6ab69acc96566781611ab"
        }
        nestedImageSrc={
          "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1942788290&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20"
        }
        bottomImageSrc={
          "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=1942788290"
        }
      />
    ),
    categories: [categories.it, categories.leadership],
    rank: rankTypes.silver,
  },
  {
    title: "The Compound Effect",
    image: (
      <AmazonImage
        aLink={
          "https://www.amazon.com/gp/product/0306924633/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0306924633&linkCode=as2&tag=kfiggins-20&linkId=aa09fcbdf750258e73218032b5c97cdc"
        }
        nestedImageSrc={
          "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0306924633&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20"
        }
        bottomImageSrc={
          "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=0306924633"
        }
      />
    ),
    categories: [categories.leadership],
    rank: rankTypes.silver,
  },
];
