
export class HTMLUtils {
  public static getHeaderHeight = () => {
    const result = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height-full');
    return parseFloat(result);
  }
}
