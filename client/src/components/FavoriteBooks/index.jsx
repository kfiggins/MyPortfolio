import React from "react";
import { useTable } from "react-table";
import extremeOwnershipImage from "../../assets/FavoriteBooks/extremeOwnership.jpg";

const categories = {
  leadership: "leadership",
  it: "IT",
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

  const data = React.useMemo(
    () => [
      {
        title: "Extreme Ownership: How U.S. Navy SEALs Lead and Win",
        image: <img style={{ width: "50px" }} src={extremeOwnershipImage} />,
        category: categories.leadership,
      },
      {
        title: "Rework",
        image: "N/A",
        category: categories.leadership,
      },
      {
        title: "The Phoenix Project",
        image: "N/A",
        category: categories.it,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <h1>Book Ratings</h1>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
