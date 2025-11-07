export const createExercise = (data) => ({
  id: data.id,
  name: data.name,
  image: data.image,
  time: data.time,
  description: data.description,
  category: data.category,
  instructions: data.instructions,
  video: data.video,
});
