export const getExperience = (start: string | Date, end: string | Date | null) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  // If the current month hasn't completed the start date's day → reduce month
  if (endDate.getDate() < startDate.getDate()) {
    months -= 1;
  }

  // Borrow from year if months go negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
};