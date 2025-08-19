import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const review = await Review.create({
    user: req.user._id,
    movieId: req.params.id,
    content: req.body.content,
    rating: req.body.rating
  });
  res.json(review);
};

export const getReviews = async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.id }).populate("user", "name");
  res.json(reviews);
};

export const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Not authorized" });
  review.content = req.body.content;
  review.rating = req.body.rating;
  await review.save();
  res.json(review);
};

export const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: "Not authorized" });
  await review.deleteOne();
  res.json({ message: "Review deleted" });
};
