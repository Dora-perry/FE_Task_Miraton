import React from "react";
import { useTable, Column, CellProps } from "react-table";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MapComponent from "../components/MapComponent";

type Contact = {
  name: string;
  phone: string;
  email: string;
  addresses: string[];
  longitude: string;
  latitude: string;
};

const Dashboard = () => {
  const [contacts] = useLocalStorage<Contact[]>("contacts", []);

  const data = React.useMemo(() => contacts, [contacts]);

  const columns = React.useMemo<Column<Contact>[]>(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Address",
        accessor: "addresses",
        Cell: ({ cell: { value } }: CellProps<Contact, string[]>) => (
          <span>{value[Math.floor(Math.random() * value.length)]}</span>
        ),
      },
      {
        Header: "Longitude",
        accessor: "longitude",
      },
      {
        Header: "Latitude",
        accessor: "latitude",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <h1 className="text-4xl mb-4 text-gray-800 font-bold w-60 mx-auto">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-xl mb-2">Table View</h2>
          <table {...getTableProps()} className="min-w-full bg-white border">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="py-2 px-4 border"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="py-2 px-4 border">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-xl mb-2">Map View</h2>
          <div className="h-96">
            <MapComponent contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
