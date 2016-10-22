describe('strMakerWithSize',function(){
  it('returns the correct string rectangle',function(){
  arr = ["Hello", "World", "in", "a", "frame"];
  result = '*********\n* Hello *\n* World *\n* in    *\n* a     *\n* frame *\n*********\n';
  str = strMakerWithSize(arr);
    expect(str).toBe(result);
  });
});
