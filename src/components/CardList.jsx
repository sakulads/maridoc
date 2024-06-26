import React from "react";
import Person from "@/components/Person";
import { Typography } from "@mui/material";

function CardList() {
  const persons = [
    {
      id: 0,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 1,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 2,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 3,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 4,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 5,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 6,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 7,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
    {
      id: 8,
      name: "Дитяча психологія",
      price: "1800 грн*",
      textBody: "Консультація 60-90 хвилин*",
      body2: "Заключення повне з описом*",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <Typography
        variant="h4"
        component="h4"
        align="center"
        gutterBottom
        sx={{ color: "#FF6C6C", fontWeight: 500, mt: 4, mb: 4 }}
      >
        Скільки коштує консультація?
      </Typography>
      <div className="flex flex-row justify-evenly gap-y-12 gap-x-8 flex-wrap items-stretch">
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <Person person={person} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardList;
