import React from "react";
import { useTable } from "react-table";

import { sharedFonts, sharedColors } from "../../style/variables";
import BookCard from "./BookCard";

const categories = {
  leadership: "Leadership",
  it: "IT",
};

export const rankTypes = {
  diamond: "Diamond",
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
};

const getAmazonImage = (aLink, nestedImageSrc, bottomImageSrc) => {
  return (
    <>
      <a target="_blank" href={aLink}>
        <img border="0" src={nestedImageSrc} />
      </a>
      <img
        src={bottomImageSrc}
        style={{ border: "none !important", margin: "0px !important" }}
        width="1"
        height="1"
        border="0"
        alt=""
      />
    </>
  );
};

export default function BookRatings() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Category",
        accessor: "category",
      },
    ],
    []
  );

  // const data = React.useMemo(
  //   () =>
  const data = [
    {
      title: "Extreme Ownership",
      image: getAmazonImage(
        "https://www.amazon.com/gp/product/1250183863/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250183863&linkCode=as2&tag=kfiggins-20&linkId=254044fac4f57dd5077b249a51e838d5",
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1250183863&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20",
        "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=1250183863"
      ),
      categories: [categories.leadership],
      description: (
        <span>
          <storng>Extreme Ownership</storng> explains the SEAL leadership
          concepts crucial to accomplishing the most difficult missions in
          combat and how to apply them to any group, team, or organization. It
          provides the reader with Jocko and Leif's formula for success: the
          mindset and guiding principles that enable SEAL combat units to
          achieve extraordinary results. It demonstrates how to apply these
          directly to business and life to likewise achieve victory.
        </span>
      ),
      rank: rankTypes.diamond,
    },
    {
      title: "Rework",

      image: getAmazonImage(
        "https://www.amazon.com/gp/product/0307463745/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0307463745&linkCode=as2&tag=kfiggins-20&linkId=b457b60ebe3215f0b6aa31847d25f280",
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0307463745&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20",
        "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=0307463745"
      ),
      categories: [categories.leadership],
      rank: rankTypes.gold,
    },
    {
      title: "The Phoenix Project",
      image: getAmazonImage(
        "https://www.amazon.com/gp/product/1942788290/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1942788290&linkCode=as2&tag=kfiggins-20&linkId=e6f4bf2800e6ab69acc96566781611ab",
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1942788290&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20",
        "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=1942788290"
      ),
      categories: [categories.it, categories.leadership],
      rank: rankTypes.silver,
    },
    {
      title: "The Compound Effect",
      image: getAmazonImage(
        "https://www.amazon.com/gp/product/0306924633/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0306924633&linkCode=as2&tag=kfiggins-20&linkId=aa09fcbdf750258e73218032b5c97cdc",
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0306924633&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kfiggins-20",
        "//ir-na.amazon-adsystem.com/e/ir?t=kfiggins-20&l=am2&o=1&a=0306924633"
      ),
      categories: [categories.leadership],
      rank: rankTypes.bronze,
    },
  ];

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={sharedFonts.cardBody}>
        As an Amazon Associate I earn from qualifying purchases.
      </div>
      {data.map((book) => (
        <BookCard book={book} />
      ))}
      <iframe
        src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ez&f=ifr&linkID=197b33a265ac15e1e3f31aef39db54a6&t=kfiggins-20&tracking_id=kfiggins-20"
        width="468"
        height="60"
        scrolling="no"
        border="0"
        marginwidth="0"
        style={{ border: "none" }}
        frameborder="0"
      ></iframe>
    </div>
  );

  // return (
  //   <div>
  //     <h1>Book Ratings</h1>
  //     <table {...getTableProps()}>
  //       <thead>
  //         {
  //           // Loop over the header rows
  //           headerGroups.map((headerGroup) => (
  //             // Apply the header row props
  //             <tr {...headerGroup.getHeaderGroupProps()}>
  //               {
  //                 // Loop over the headers in each row
  //                 headerGroup.headers.map((column) => (
  //                   // Apply the header cell props
  //                   <th {...column.getHeaderProps()}>
  //                     {
  //                       // Render the header
  //                       column.render("Header")
  //                     }
  //                   </th>
  //                 ))
  //               }
  //             </tr>
  //           ))
  //         }
  //       </thead>
  //       {/* Apply the table body props */}
  //       <tbody {...getTableBodyProps()}>
  //         {
  //           // Loop over the table rows
  //           rows.map((row) => {
  //             // Prepare the row for display
  //             prepareRow(row);
  //             return (
  //               // Apply the row props
  //               <tr {...row.getRowProps()}>
  //                 {
  //                   // Loop over the rows cells
  //                   row.cells.map((cell) => {
  //                     // Apply the cell props
  //                     return (
  //                       <td {...cell.getCellProps()}>
  //                         {
  //                           // Render the cell contents
  //                           cell.render("Cell")
  //                         }
  //                       </td>
  //                     );
  //                   })
  //                 }
  //               </tr>
  //             );
  //           })
  //         }
  //       </tbody>
  //     </table>
  //   </div>
  // );
}
