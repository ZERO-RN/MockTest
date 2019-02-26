/**
 * Created by zerowolf Date: 2018/10/22 Time: 下午9:31
 */

export default {
    Idle: 'Idle',               // 初始状态，无刷新的情况
    CanLoadMore: 'CanLoadMore', // 可以加载更多，表示列表还有数据可以继续加载
    Refreshing: 'Refreshing',   // 正在刷新中
    NoMoreData: 'NoMoreData',   // 没有更多数据了
    Failure: 'Failure'          // 刷新失败
}
