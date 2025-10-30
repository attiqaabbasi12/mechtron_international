import React from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-red-700 mb-4">
        Project #{id} Details
      </h2>
      <p className="max-w-2xl mx-auto text-lg">
        Detailed description of project #{id}. You can include images,
        specifications, and outcomes here.
      </p>
      <Link to="/" className="mt-6 inline-block text-red-700 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetail;
