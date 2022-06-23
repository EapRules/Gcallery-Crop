export const useImages = () => {
  const data = [
    {
      id: 1,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 2,
      name: "imagen4.jpg",
      url:
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 3,
      name: "imagen4.jpg",
      url:
        "https://images.pexels.com/photos/8336403/pexels-photo-8336403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 4,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 5,
      name: "imagen4.jpg",
      url:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 6,
      name: "imagen4.jpg",
      url:
        "data:image/jpeg;base64,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",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 7,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 8,
      name: "imagen4.jpg",
      url:
        "https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
  ];
  return {
    data,
  };
};
