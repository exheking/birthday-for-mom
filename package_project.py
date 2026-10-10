import os
import sys
import zipfile

# 確保 Windows 終端機輸出中文與特殊符號時不會報錯
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

def package_project():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    desktop_dir = os.path.dirname(base_dir) # c:\Users\exhek\OneDrive\桌面
    dest_zip = os.path.join(desktop_dir, "birthday_完整專案包.zip")

    exclude_dirs = {'.netlify', 'scratch', '__pycache__'}

    print("==================================================")
    print("正在將專案打包為壓縮檔：birthday_完整專案包.zip ...")
    print(f"目標路徑: {dest_zip}")
    print("==================================================")

    file_count = 0
    total_size = 0

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
                total_size += os.path.getsize(fp)

    zip_size_mb = os.path.getsize(dest_zip) / (1024 * 1024)
    print("--------------------------------------------------")
    print(f"[OK] 打包完成！")
    print(f"[統計] 共計打包檔案數：{file_count} 個")
    print(f"[大小] 壓縮檔大小：{zip_size_mb:.2f} MB")
    print(f"[位置] 檔案已儲存至桌面：{dest_zip}")
    print("==================================================")

if __name__ == "__main__":
    package_project()
