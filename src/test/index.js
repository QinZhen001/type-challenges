const _retry = (info, num) => {
  if (!num) {
    return reject(info);
  }

  setTimeout(() => {
    fn(...args).then(
      (res) => resolve(res),
      //   (rej) => _retry(rej, num--)
      //
      (rej) => _retry(rej, --num)
    );
  }, interval);
};
