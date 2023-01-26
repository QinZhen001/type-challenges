type Shape = 'circle' | 'rect' ;

function getArea(shape: Shape) {
  switch (shape) {
    case 'circle':
      return ""
    case 'rect':
      return ""
    default:
      // 如果任何shape.kind没有在上面处理
      // 你会得到一个类型检查错误。
      const _exhaustiveCheck: never = shape;
      throw new Error('Unknown shape kind');
  }
}

