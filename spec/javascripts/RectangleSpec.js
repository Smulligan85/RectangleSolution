describe('strMakerWithEvenSides',function(){
  it('returns the correct string rectangle',function(){
  arr = ["Hello", "World", "in", "a", "frame"];
  result = '*********\n* Hello *\n* World *\n* in    *\n* a     *\n* frame *\n*********\n';
  str = strMakerWithEvenSides(arr);
    expect(str).toBe(result);
  });
});

describe('strMaker', function() {
  it('returns the correct uneven string rectangle', function() {
  arr = ["Hello", "World", "in", "a", "frame"];
  result = '*********\n* Hello *\n* World *\n* in *\n* a *\n* frame *\n*********';
  str = strMaker(arr);
    expect(str).toBe(result);

  });
});
