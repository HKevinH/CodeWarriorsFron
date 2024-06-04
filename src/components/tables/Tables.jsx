import React from "react";

const HeaderTable = [
  {
    title: "#",
  },
  {
    title: "Fechas",
  },
  {
    title: "Quien?",
  },
  {
    title: "Evento",
  },
  {
    title: "Lenguajes Utilizados",
  },
];

const ContentTable = [
  {
    id: 1,
    date: "2021-10-10",
    name: "Diego",
    event: "Evento 1",
    languages: "Python",
  },
  {
    id: 2,
    date: "2021-10-10",
    name: "Diego",
    event: "Evento 1",
    languages: "Python",
  },
  {
    id: 3,
    date: "2021-10-10",
    name: "Diego",
    event: "Evento 1",
    languages: "Python",
  },
];

const Tables = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse rounded-2xl">
        <thead>
          <tr className="bg-gray-100 rounded-t-2xl">
            {HeaderTable.map((item, index) => (
              <th
                className={`text-center text-blue-color  p-4 ${
                  index === 0 ? "rounded-tl-2xl" : ""
                } ${index === HeaderTable.length - 1 ? "rounded-tr-2xl" : ""}`}
                key={index}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody translate="slide">
          {ContentTable.map((item, index) => (
            <tr key={index} className="text-center text-blue-color">
              <td className="border border-gray-300 border-r-0 border-l-0 border-t-0 p-2">
                {item.id}
              </td>
              <td className="border border-gray-300 border-r-0 border-l-0 border-t-0">
                {item.date}
              </td>
              <td className="border border-gray-300 border-r-0 border-l-0 border-t-0">
                {item.name}
              </td>
              <td className="border border-gray-300 border-r-0 border-l-0 border-t-0">
                {item.event}
              </td>
              <td className="border border-gray-300 border-r-0 border-l-0 border-t-0">
                {item.languages}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Tables };
