import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FadeIn from '../../../FadeIn';
export function ProfileCard({ imgSrc, name, title, onButtonClick }) {
  return (
    <FadeIn>
    <Card className="w-full sm:w-72 md:w-80 dark:bg-gray-900 dark:text-gray-100">
      <CardHeader floated={false} className="h-40 sm:h-48 md:h-56 dark:bg-gray-800">
        <img
          src={imgSrc}
          alt={`${name} profile picture`}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center py-4">
        <Typography variant="h5" color="blue-gray" className="mb-1 dark:text-gray-100">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium text-blue-600 dark:text-blue-100" textGradient>
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col items-center gap-2 pt-2 dark:text-gray-100">
        <Button onClick={onButtonClick} color="blue" size="sm">
          Know More
        </Button>
      </CardFooter>
    </Card>
    </FadeIn>
  );
}
