

class App {


    /**
     * ProtoConfig
     * @type {null}
     */
    public static ProtoConfig:any = null;
    /**
     * ProtoFile
     * @type {null}
     */
    public static ProtoMessage:any = null;
    /**
     * 全局配置数据
     * @type {null}
     */
    public static GlobalData:any = null;

    /**
     * Socket请求
     */
    public static get Socket():Socket {
        return SingletonFactory.singleton(Socket);
    }

    /**
     * 配置类
     */
    public static get Config():Config {
        return SingletonFactory.singleton(Config);
    }
    /**
     * 音频管理
     */
    public static get SoundManager():SoundManager {
        return SingletonFactory.singleton(SoundManager);
    }

    public static get Facade():ApplicationFacade {
        return ApplicationFacade.getInstance();
    }

    /**
     * UI管理类
     */
    public static get UI():UI{
        return SingletonFactory.singleton(UI);
    }

    /**
     * 全局事件管理
     */
    public static get ListenerManager():ListenerManager {
        return SingletonFactory.singleton(ListenerManager);
    }

    /**
     * 统一的计时器和帧刷管理类
     * @type {TimerManager}
     */
    public static get TimerManager():TimerManager {
        return SingletonFactory.singleton(TimerManager);
    }

    /**
     * 分帧处理类
     */
    public static get DelayOptManager():DelayOptManager {
        return SingletonFactory.singleton(DelayOptManager);
    }

    /**
     * 设备工具类
     */
    public static get DeviceUtils():DeviceUtils {
        return SingletonFactory.singleton(DeviceUtils);
    }

    /**
     * 键盘操作工具类
     */
    public static get KeyboardUtils():KeyboardUtils {
        return SingletonFactory.singleton(KeyboardUtils);
    }

    /**
     * 数学计算工具类
     */
    public static get MathUtils():MathUtils {
        return SingletonFactory.singleton(MathUtils);
    }

    public static get UITools():UITools {
        return SingletonFactory.singleton(UITools);
    }

    public static get NotifierManager():NotifierManager{
        return SingletonFactory.singleton(NotifierManager);
    }

    constructor(){

    }
    
    public static Init():void {
        //初始化protobuf文件
        App.ProtoMessage = dcodeIO.ProtoBuf.loadProto(Config.get(App.GlobalData.ProtoFile));
        App.ProtoConfig = Config.get(App.GlobalData.ProtoConfig);
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
        // App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new UTFMsg());
        // App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsg());
        App.Socket.connect();
    }

    private static _stage : egret.Stage;
    public static setStage(s:egret.Stage):void {
        this._stage = s;
    }

    public static get stage(){
        return this._stage;
    }

    public static getProxyByName(name:string) : any{
        return App.Facade.retrieveProxy(name);
    }
}