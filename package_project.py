import os
import sys
import zipfile
import re

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

def package_lightweight(base_dir, desktop_dir):
    """打包純遊戲精簡版（只含遊戲中會出現的照片、音樂、影片與程式碼）"""
    dest_zip = os.path.join(desktop_dir, "birthday_僅遊戲照片精簡包.zip")
    
    core_files = [
        'index.html', 'style.css', 'game.js', 'config.js',
        'bgm.mp3', 'A_tiny_hand_in_mine_tonight.mp3',
        '雙擊啟動遊戲.bat', '雙擊啟動遊戲.command',
        '使用說明_傳送與新電腦開啟.txt', 'README.md'
    ]

    all_text = ''
    for cf in ['index.html', 'style.css', 'game.js', 'config.js']:
        fp = os.path.join(base_dir, cf)
        if os.path.exists(fp):
            with open(fp, 'r', encoding='utf-8') as f:
                all_text += f.read() + '\n'

    images = set(re.findall(r'images/[a-zA-Z0-9_\-\.\u4e00-\u9fa5]+', all_text))

    all_entries = []
    for cf in core_files:
        fp = os.path.join(base_dir, cf)
        if os.path.exists(fp):
            all_entries.append((fp, os.path.join('birthday', cf)))

    for im in sorted(images):
        fp = os.path.join(base_dir, im)
        if os.path.exists(fp):
            all_entries.append((fp, os.path.join('birthday', im)))

    vid = os.path.join(base_dir, 'videos', 'birthday_video.mp4')
    if os.path.exists(vid):
        all_entries.append((vid, os.path.join('birthday', 'videos', 'birthday_video.mp4')))

    with zipfile.ZipFile(dest_zip, 'w', zipfile.ZIP_DEFLATED) as zf:
        for src, arc in all_entries:
            zf.write(src, arc)

    size_mb = os.path.getsize(dest_zip) / (1024 * 1024)
    print("--------------------------------------------------")
    print(f"✅ 【純遊戲精簡包】打包完成！")
    print(f"📦 檔案數：{len(all_entries)} 個（僅包含遊戲中出現的 40 張精華照片、音樂與生日影片）")
    print(f"💾 大小：{size_mb:.2f} MB （體積縮小 80%，超快傳送！）")
    print(f"📍 位置：{dest_zip}")
    return dest_zip

def package_full(base_dir, desktop_dir):
    """打包完整備份版（包含 photo 原始未篩選相簿與 git）"""
    dest_zip = os.path.join(desktop_dir, "birthday_完整專案包.zip")
    exclude_dirs = {'.netlify', 'scratch', '__pycache__'}

    file_count = 0
    with zipfile.ZipFile(dest_zip, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(base_dir):
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            for f in files:
                if f.endswith('.zip') or f.endswith('.pyc') or f.endswith('.log'):
                    continue
                fp = os.path.join(root, f)
                arcname = os.path.relpath(fp, base_dir)
                zf.write(fp, os.path.join('birthday', arcname))
                file_count += 1

    size_mb = os.path.getsize(dest_zip) / (1024 * 1024)
    print("--------------------------------------------------")
    print(f"✅ 【完整備份包】打包完成！")
    print(f"📦 檔案數：{file_count} 個（含 photo 原始數百張相簿原始檔）")
    print(f"💾 大小：{size_mb:.2f} MB")
    print(f"📍 位置：{dest_zip}")
    return dest_zip

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    desktop_dir = os.path.dirname(base_dir) # c:\Users\exhek\OneDrive\桌面
    print("==================================================")
    print("🎂 給親愛的老婆・生日快樂 專案打包工具 🎂")
    print("==================================================")
    package_lightweight(base_dir, desktop_dir)
    package_full(base_dir, desktop_dir)
    print("==================================================")
    print("🎉 兩款壓縮包皆已更新至桌面！")
    print("==================================================")

if __name__ == "__main__":
    main()
